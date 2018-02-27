package com.zlrx.visualizer.gradle.model

import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.api.artifacts.ProjectDependency
import org.gradle.api.artifacts.ResolvedDependency
import org.gradle.tooling.provider.model.ToolingModelBuilder
import org.slf4j.LoggerFactory

class CustomToolingModelBuilder : ToolingModelBuilder {

    private val logger = LoggerFactory.getLogger(javaClass)

    override fun canBuild(modelName: String?): Boolean {
        logger.debug("CustomToolingModelBuilder.canBuild(modelName=$modelName)")
        return modelName.equals(GenericModel::class.java.name)
    }

    override fun buildAll(modelName: String?, project: Project?): Any {
        logger.debug("CustomToolingModelBuilder.buildAll(modelName=$modelName,project)")
        if (project != null) {
            val sub = project.subprojects.map { dependencies(it) }
            val root = dependencies(project)
            return DefaultGenericModel(sub, root)
        }
        logger.error("project must not to be null")
        throw RuntimeException("project must not to be null")
    }

    private fun dependencies(project: Project): Map<String, List<DependencyModel>> {
        val name = project.name
        val group = project.group
        val version = project.version
        val configurations = project.configurations
                .filter { it.isCanBeResolved }
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