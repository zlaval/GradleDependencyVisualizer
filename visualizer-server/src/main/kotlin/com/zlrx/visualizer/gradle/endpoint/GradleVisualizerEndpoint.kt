package com.zlrx.visualizer.gradle.endpoint

import com.zlrx.visualizer.gradle.model.JsonDependencyModel
import com.zlrx.visualizer.gradle.service.GradleDependencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/dependencies")
class GradleVisualizerEndpoint {

    @Autowired
    private lateinit var gradleDependencyService: GradleDependencyService

    @GetMapping
    fun generateDependencyData(): JsonDependencyModel = gradleDependencyService.generateDependencyGraphData()

}