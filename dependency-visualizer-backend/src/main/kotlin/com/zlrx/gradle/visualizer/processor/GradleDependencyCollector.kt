package com.zlrx.gradle.visualizer.processor

import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.model.plugin.DependencyModelAction
import com.zlrx.gradle.visualizer.model.JsonDependencyModel
import org.gradle.tooling.GradleConnector
import java.io.File


class GradleDependencyCollector(private val path: String, gradleInstallDir: String) {

    //TODO separate collector to module, independnet to spring etc

    private var gradleConnector: GradleConnector = GradleConnector.newConnector()

    init {
        gradleConnector.useInstallation(File(gradleInstallDir))
    }

    fun collectDependency(): JsonDependencyModel {
        gradleConnector.forProjectDirectory(File(path))
        val gradleConnection = gradleConnector.connect()

        try {
            val model = gradleConnection.action(DependencyModelAction())
                    .withArguments("--init-script",
                            File(javaClass.classLoader.getResource("project-init.gradle").file).absolutePath)
                    .run()

            val moduleDependencies = model.getDependencies()

            return JsonDependencyModel("", "")
            //return JsonDependencyModel("groupid", "artifactId", createJsonModel(moduleDependencies, ""))
        } finally {
            gradleConnection.close()
        }
    }

    private fun createJsonModel(compileDependencies: List<Dependency>, parent: String): List<JsonDependencyModel> {
//        return compileDependencies.map {
//            val name = "${it.getArtifactId()}:${it.getVersion()}"
//            JsonDependencyModel(name, parent, createJsonModel(it.getChildren(), name))
//        }
        return ArrayList()
    }


}