package com.zlrx.gradle.model.builder

import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.model.DependencyImpl
import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.ProjectDependency
import org.gradle.api.artifacts.ResolvedDependency


class DependencyCollector(private val project: Project) {

    private val scopeFilter = listOf<String>("compile", "compileOnly", "runtime", "testCompile", "testCompileOnly", "testRuntime")

    fun dependencies(): Dependency {
        return collect(project, "root")
    }

    private fun collect(project: Project, type: String): Dependency {
        val name = project.name
        val group = project.group.toString()
        val version = project.version.toString()

        val modules: List<Dependency> = project.subprojects.map { collect(it, "module") }
        val dependent = project.configurations
                .filter { it.isCanBeResolved }
                .filter { scopeFilter.contains(it.name) }
                .map { dependencyGraph(it) }
                .flatten()
                .distinctBy {
                    Selector(it.getGroupId(), it.getArtifactId(), it.getVersion(), it.getScope())
                }

        //TODO remove module and dep duplicates
        val dependencyGraph: List<Dependency> = dependent + modules

        return DependencyImpl(group, name, version, type, "module", dependencyGraph)
    }

    private fun dependencyGraph(configuration: Configuration): List<Dependency> {
//        val projectDependency: List<Dependency> = configuration.allDependencies
//                .filter { it is ProjectDependency }
//                .map { projectDependencyInfo(it as ProjectDependency) }

        val modulDependency: List<Dependency> = configuration.resolvedConfiguration.firstLevelModuleDependencies
                .map { dependencyInfo(it, configuration.name) }
//projectDependency +
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

    private fun projectDependencyInfo(dependency: ProjectDependency): Dependency {
        val name = dependency.name
        val group = dependency.group
        val version = dependency.version
        val type = "module"
        val scope = "TODO"
        return DependencyImpl(group, name, version, type, scope)
    }

}

data class Selector(val groupId: String, val artifactId: String, val version: String, val scope: String)