package com.zlrx.visualizer.gradle.processor

import com.zlrx.visualizer.gradle.model.DependencyModel
import com.zlrx.visualizer.gradle.model.JsonDependencyModel
import com.zlrx.visualizer.gradle.model.Link
import com.zlrx.visualizer.gradle.model.Node
import org.gradle.tooling.GradleConnector
import org.gradle.tooling.model.idea.IdeaDependency
import org.gradle.tooling.model.idea.IdeaProject
import org.gradle.tooling.model.idea.IdeaSingleEntryLibraryDependency
import java.io.File


class GradleDependencyCollector(private val path: String, gradleInstallDir: String) {

    private var gradleConnector: GradleConnector = GradleConnector.newConnector()

    init {
        gradleConnector.useInstallation(File(gradleInstallDir))
    }

    fun collectDependency(): JsonDependencyModel {
        gradleConnector.forProjectDirectory(File(path))
        val gradleConnection = gradleConnector.connect()

        try {
            val ideaProject = gradleConnection.getModel(IdeaProject::class.java)
            val dependencyModel: DependencyModel = ideaProject.children.map { module ->
                val dependencyList = module.dependencies
                        .filter { it.scope.scope == "RUNTIME" }
                        .map { dep: IdeaDependency -> createDependencyModel(dep) }

                val root = DependencyModel("com.zlrx", module.name, "1.0")
                root.addChildren(dependencyList)
                root
            }
                    .first()
            return mapToJsonDependencyModel(dependencyModel)
        } finally {
            gradleConnection.close()
        }
    }

    private fun createDependencyModel(dep: IdeaDependency): DependencyModel {
        if (dep is IdeaSingleEntryLibraryDependency) {
            val gradleModuleVersion = dep.gradleModuleVersion
            val groupId = gradleModuleVersion.group
            val artifactId = gradleModuleVersion.name
            val version = gradleModuleVersion.version
            return DependencyModel(groupId, artifactId, version)
        }
        throw RuntimeException("Invalid type")
    }

    fun mapToJsonDependencyModel(dependencyModel: DependencyModel): JsonDependencyModel {

        val nodes = ArrayList<Node>()
        val links = ArrayList<Link>()

        val rootNode = Node(dependencyModel.artifactId, group = 0)
        nodes.add(rootNode)

        dependencyModel.getChildren().forEach {
            val node = Node(it.artifactId)
            val link = Link(rootNode.id, node.id)
            nodes.add(node)
            links.add(link)
        }

        return JsonDependencyModel(nodes, links)
    }

}