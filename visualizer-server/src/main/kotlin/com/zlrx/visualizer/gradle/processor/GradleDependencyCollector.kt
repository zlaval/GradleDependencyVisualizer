package com.zlrx.visualizer.gradle.processor

import com.zlrx.visualizer.gradle.model.*
import org.gradle.tooling.GradleConnector
import java.io.File


class GradleDependencyCollector(private val path: String, gradleInstallDir: String) {

    private var gradleConnector: GradleConnector = GradleConnector.newConnector()

    private val dependencyMap: HashMap<String, Node> = HashMap()

    init {
        gradleConnector.useInstallation(File(gradleInstallDir))
    }

    fun collectDependency(): JsonDependencyModel {
        gradleConnector.forProjectDirectory(File(path))
        val gradleConnection = gradleConnector.connect()

        try {
            val model = gradleConnection.action(GenericModelAction())
                    .withArguments("--init-script",
                            File(javaClass.classLoader.getResource("project-init.gradle").file).absolutePath)
                    .run()

            val result = model.getRootDependencies()

//                            val ideaProject = gradleConnection . getModel (IdeaProject::class.java)
//
//
//            val dependencyModel: List<DependencyModel> = ideaProject.children
//                    .filter { !it.name.contains("Core") }
//                    .map { module ->
//                        val dependencyList = module.dependencies.map { dep: IdeaDependency -> createDependencyModel(dep) }
//                        val root = DependencyModel("root", module.name, "root_version", dependencyList)
//                        root
//                    }
            return mapToJsonDependencyModel(ArrayList())
        } finally {
            gradleConnection.close()
        }
    }

//    private fun createDependencyModel(dep: IdeaDependency): DependencyModel {
//        if (dep is IdeaSingleEntryLibraryDependency) {
//            val gradleModuleVersion = dep.gradleModuleVersion
//            val groupId = gradleModuleVersion.group
//            val artifactId = gradleModuleVersion.name
//            val version = gradleModuleVersion.version
//            return DependencyModel(groupId, artifactId, version)
//        } else if (dep is IdeaModuleDependency) {
//            val moduleName = dep.targetModuleName
//            return DependencyModel("dependent", moduleName, "dep_version")
//        }
//        throw RuntimeException("Invalid type")
//    }


    private fun mapToJsonDependencyModel(dependencyModels: List<DependencyModel>): JsonDependencyModel {

        var group = 1

        val nodes = ArrayList<Node>()
        val links = ArrayList<Link>()

        dependencyModels.forEach {

            val rootNode = Node(it.artifactId, group = group)
            if (!dependencyMap.containsKey(rootNode.id)) {
                dependencyMap.put(rootNode.id, rootNode)
                nodes.add(rootNode)
            }

            it.children.forEach {
                val version = if (it.version.isBlank()) "" else ":${it.version}"

                val node = Node(it.artifactId + version)
                val link = Link(rootNode.id, node.id)

                if (!dependencyMap.containsKey(node.id)) {
                    dependencyMap.put(node.id, node)
                    nodes.add(node)
                }

                links.add(link)
            }
            group += 1
        }

        return JsonDependencyModel(nodes, links)
    }

}