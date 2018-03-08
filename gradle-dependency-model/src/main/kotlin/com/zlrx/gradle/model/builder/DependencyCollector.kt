package com.zlrx.gradle.model.builder

import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.model.DependencyImpl
import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.ResolvedDependency


class DependencyCollector(private val project: Project) {

    private val scopeFilter = listOf("compile", "compileOnly", "runtime", "testCompile", "testCompileOnly", "testRuntime")

    fun dependencies(): Dependency {
        return collect(project, "root")
    }

    private fun collect(project: Project, scope: String): Dependency {
        val name = project.name
        val group = project.group.toString()
        val version = project.version.toString()

        val modules: List<Dependency> = project.childProjects.map { collect(it.value, "module") }
        val dependent = project.configurations
                .filter { it.isCanBeResolved }
                .filter { scopeFilter.contains(it.name) }
                .map { dependencyGraph(it) }
                .flatten()
                .groupBy { Selector(it.getGroupId(), it.getArtifactId(), it.getVersion()) }
                .map { (key, value) ->
                    combineDependencies(value)
                }

        val dependencyGraph: List<Dependency> = dependent + modules

        return DependencyImpl(group, name, version, "project", scope, dependencyGraph)
    }

    private fun combineDependencies(dependencies: List<Dependency>): Dependency {
        val firstDependency = dependencies[0]
        val scope = dependencies.joinToString(", ") { it.getScope() }

        val subDependencies = dependencies
                .map { it.getChildren() }
                .flatten()
                .groupBy { Selector(it.getGroupId(), it.getArtifactId(), it.getVersion()) }
                .map { (_, value) -> combineDependencies(value) }

        return DependencyImpl(firstDependency.getGroupId(), firstDependency.getArtifactId(), firstDependency.getVersion()
                , firstDependency.getType(), scope, subDependencies)

    }

    private fun dependencyGraph(configuration: Configuration): List<Dependency> {
        val modulDependency: List<Dependency> = configuration.resolvedConfiguration.firstLevelModuleDependencies
                .map { dependencyInfo(it, configuration.name) }
        return modulDependency
    }

    private fun dependencyInfo(dependency: ResolvedDependency, scope: String): Dependency {
        val name = dependency.moduleName
        val group = dependency.moduleGroup
        val version = dependency.moduleVersion
        val type = "dependency"
        val children = dependency.children.map { dependencyInfo(it, scope) }
        return DependencyImpl(group, name, version, type, scope, children)
    }

}

data class Selector(val groupId: String, val artifactId: String, val version: String)