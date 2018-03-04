package com.zlrx.gradle.visualizer.endpoint

import com.zlrx.gradle.visualizer.model.JsonDependencyModel
import com.zlrx.gradle.visualizer.service.GradleDependencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/dependencies")
class GradleVisualizerEndpoint {

    @Autowired
    private lateinit var gradleDependencyService: GradleDependencyService

    @GetMapping("{scope}")
    @CrossOrigin
    fun generateDependencyData(@PathVariable scope: String): JsonDependencyModel = gradleDependencyService.generateDependencyGraphData(scope)

}