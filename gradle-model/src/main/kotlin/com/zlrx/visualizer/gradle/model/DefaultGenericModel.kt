package com.zlrx.visualizer.gradle.model

import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.ProjectDependency
import org.gradle.api.artifacts.ResolvedDependency
import java.io.Serializable

class DefaultGenericModel(val project: Project) : GenericModel, Serializable {

    //TODO need correct datatype
    override fun getSubprojectDependencies(): List<Map<String, List<DependencyModel>>> {
        return project.subprojects.map { dependencies(it) }
    }

    override fun getRootDependencies(): Map<String, List<DependencyModel>> {
        return dependencies(project)
    }

    private fun dependencies(project: Project): Map<String, List<DependencyModel>> {
        val name = project.name
        val group = project.group
        val version = project.version
        val configurations = project.configurations
                .map { it.name to dependencyGraph(it) }
                .toMap()

        return configurations
        // TODO "need the other data?"
    }

    private fun dependencyGraph(configuration: Configuration): List<DependencyModel> {
        val projectDependency: List<DependencyModel> = configuration.allDependencies
                .filter { it is ProjectDependency }
                .map { projectDependencyInfo(it as ProjectDependency) }
        val modulDependency: List<DependencyModel> = configuration.resolvedConfiguration.firstLevelModuleDependencies
                .map { dependencyInfo(it) }
        return projectDependency + modulDependency
    }

    private fun dependencyInfo(dependency: ResolvedDependency): DependencyModel {
        val name = dependency.moduleName
        val group = dependency.moduleGroup
        val version = dependency.moduleVersion
        val type = "dependency"
        val children = dependency.children.map { dependencyInfo(it) }
        return DependencyModel(group, name, version, type, children)
    }

    private fun projectDependencyInfo(dependency: ProjectDependency): DependencyModel {
        val name = dependency.name
        val group = dependency.group
        val version = dependency.version
        val type = "module"

        return DependencyModel(group, name, version, type)
    }

}