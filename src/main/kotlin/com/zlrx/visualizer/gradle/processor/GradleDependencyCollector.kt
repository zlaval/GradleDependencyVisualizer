package com.zlrx.visualizer.gradle.processor

import com.zlrx.visualizer.gradle.model.DependencyModel
import org.gradle.tooling.GradleConnector
import org.gradle.tooling.model.GradleProject
import org.gradle.tooling.model.idea.IdeaDependency
import org.gradle.tooling.model.idea.IdeaModule
import org.gradle.tooling.model.idea.IdeaProject
import org.gradle.tooling.model.idea.IdeaSingleEntryLibraryDependency
import java.io.File


class GradleDependencyCollector(private val path: String) {

    private val dependencies: MutableMap<String, DependencyModel> = HashMap()

    fun collectDependency(): DependencyModel {

        val gradleLocation = File("d:\\Devtool\\Gradle\\")
        val gradleConnector = GradleConnector.newConnector()
        gradleConnector.useInstallation(gradleLocation)
        gradleConnector.forProjectDirectory(File("d:\\Application\\gradle-dependency\\"))


        val gradleConnection = gradleConnector.connect()

        try {
            val gradleProject = gradleConnection.getModel(GradleProject::class.java)
            val ideaProject = gradleConnection.getModel(IdeaProject::class.java)


            println("**********************************************************************")

            ideaProject.children.forEach { module: IdeaModule ->

                module.dependencies
                        .filter { dep: IdeaDependency ->

                            dep.scope.scope == "RUNTIME"

                        }
                        .forEach { dep: IdeaDependency ->
                            if (dep is IdeaSingleEntryLibraryDependency) {
                                val gradleModuleVersion = dep.gradleModuleVersion
                                val groupId = gradleModuleVersion.group
                                val artifactId = gradleModuleVersion.name
                                val version = gradleModuleVersion.version
                                println("$groupId:$artifactId:$version")


                            }


                        }
            }
            println("**********************************************************************")
        } finally {
            gradleConnection.close()
        }


        //TODO read file
        //parse
        //manage dep model

        return DependencyModel("", "", "")

    }

    private fun manageDependencyModel(groupId: String,
                                      artifactId: String,
                                      version: String,
                                      parent: DependencyModel) {

        val key = "$groupId:$artifactId:$version"
        val model = dependencies.get(key) ?: DependencyModel(groupId, artifactId, version)
        dependencies.putIfAbsent(key, model)
        parent.addChild(model)
    }


}