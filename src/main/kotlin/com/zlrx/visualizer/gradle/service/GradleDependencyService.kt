package com.zlrx.visualizer.gradle.service

import com.zlrx.visualizer.gradle.processor.GradleDependencyCollector
import org.springframework.stereotype.Service

@Service
class GradleDependencyService {

    fun generateDependencyGraphData(): String {
        val dependencyCollector = GradleDependencyCollector("")
        dependencyCollector.collectDependency()

        return "dependnecy data"
    }


}