package com.zlrx.gradle.visualizer.endpoint

import com.zlrx.gradle.visualizer.model.JsonDependencyModel
import com.zlrx.gradle.visualizer.service.GradleDependencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class GradleVisualizerEndpoint {

    @Autowired
    private lateinit var gradleDependencyService: GradleDependencyService

    @GetMapping("/dependencies/{scope}")
    @CrossOrigin
    fun generateDependencyData(@PathVariable scope: String,
                               @RequestParam(value = "groupId", required = false) groupId: String?): JsonDependencyModel =
            gradleDependencyService.generateDependencyGraphData(scope, groupId)

    @PostMapping("/directory", consumes = [MediaType.TEXT_PLAIN_VALUE])
    @CrossOrigin
    fun setProjectDirectory(@RequestBody dir: String) {
        gradleDependencyService.setProjectDirectory(dir)
    }

}