package com.zlrx.gradle.model.builder

import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.model.DependencyImpl
import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.ProjectDependency
import org.gradle.api.artifacts.ResolvedDependency


class DependencyCollector(private val project: Project) {

    //TODO plan fine dependency model and collect info
    //maybe rearrange dependnecy types

    fun dependencies(): Map<String, Dependency> {
        val root = collect(project, "root")
        val modules = project.subprojects.map { collect(it, "submodule") }
        return mapOf("root" to root) + modules.map { it.getArtifactId() to it }.toMap()
    }

    private fun collect(project: Project, type: String): Dependency {
        val name = project.name
        val group = project.group.toString()
        val version = project.version.toString()
        val dependencieGraph = project.configurations
                .filter { it.isCanBeResolved }
                .map { it.name to dependencyGraph(it) }
                .toMap()

        return DependencyImpl(group, name, version, type, dependencieGraph)
    }

    private fun dependencyGraph(configuration: Configuration): List<Dependency> {
        val projectDependency: List<Dependency> = configuration.allDependencies
                .filter { it is ProjectDependency }
                .map { projectDependencyInfo(it as ProjectDependency) }

        val modulDependency: List<Dependency> = configuration.resolvedConfiguration.firstLevelModuleDependencies
                .map { dependencyInfo(it) }

        return projectDependency + modulDependency
    }

    private fun dependencyInfo(dependency: ResolvedDependency): Dependency {
        val name = dependency.moduleName
        val group = dependency.moduleGroup
        val version = dependency.moduleVersion
        val type = "dependency"
        val children = dependency.children.map { dependencyInfo(it) }
        return DependencyImpl(group, name, version, type, mapOf(dependency.moduleName to children))
    }

    private fun projectDependencyInfo(dependency: ProjectDependency): Dependency {
        val name = dependency.name
        val group = dependency.group
        val version = dependency.version
        val type = "module"

        return DependencyImpl(group, name, version, type)
    }

}