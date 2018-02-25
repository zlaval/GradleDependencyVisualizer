package com.zlrx.visualizer.gradle.service

import com.zlrx.visualizer.gradle.model.JsonDependencyModel
import com.zlrx.visualizer.gradle.processor.GradleDependencyCollector
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Service

@Service
class GradleDependencyService {

    @Value(value = "\${gradle.project.path}")
    private lateinit var projectPath: String

    @Value(value = "\${gradle.install.dir}")
    private lateinit var gradleInstallDir: String

    fun generateDependencyGraphData(): JsonDependencyModel {
        val dependencyCollector = GradleDependencyCollector(projectPath, gradleInstallDir)
        return dependencyCollector.collectDependency()
    }

}