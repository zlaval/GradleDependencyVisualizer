package com.zlrx.gradle.collector

import com.zlrx.gradle.model.Dependency
import com.zlrx.gradle.model.plugin.DependencyModelAction
import org.gradle.tooling.GradleConnector
import java.io.File


class GradleDependencyCollector(private val path: String, gradleInstallDir: String) {

    private val gradleConnector: GradleConnector = GradleConnector.newConnector()

    init {
        gradleConnector.useInstallation(File(gradleInstallDir))
    }

    fun collectDependency(): Dependency {
        gradleConnector.forProjectDirectory(File(path))
        val gradleConnection = gradleConnector.connect()

        try {
            val model = gradleConnection.action(DependencyModelAction())
                    .withArguments("--init-script",
                            File(javaClass.classLoader.getResource("project-init.gradle").file).absolutePath)
                    .run()
//TODO megfelelo model
            val moduleDependencies = model.getDependencies()

            return moduleDependencies["compile"]!!
        } finally {
            gradleConnection.close()
        }
    }

}