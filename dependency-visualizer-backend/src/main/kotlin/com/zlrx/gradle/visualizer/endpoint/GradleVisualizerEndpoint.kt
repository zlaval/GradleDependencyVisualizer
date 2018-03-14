package com.zlrx.gradle.visualizer.endpoint

import com.zlrx.gradle.visualizer.model.Directory
import com.zlrx.gradle.visualizer.model.JsonDependencyModel
import com.zlrx.gradle.visualizer.service.DirectoryService
import com.zlrx.gradle.visualizer.service.GradleDependencyService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("/api")
class GradleVisualizerEndpoint {

    @Autowired
    private lateinit var gradleDependencyService: GradleDependencyService

    @Autowired
    private lateinit var directoryService: DirectoryService

    @GetMapping("/dependencies/{scope}")
    fun generateDependencyData(@PathVariable scope: String,
                               @RequestParam(value = "groupId", required = false)
                               groupId: String?): JsonDependencyModel =
            gradleDependencyService.generateDependencyGraphData(scope, groupId)

    @PostMapping("/directory",
            consumes = [MediaType.APPLICATION_JSON_VALUE],
            produces = [MediaType.APPLICATION_JSON_VALUE])
    fun setProjectDirectory(@RequestBody directory: Directory): Directory = directoryService.addDirectory(directory)

    @GetMapping("/directory", produces = [MediaType.APPLICATION_JSON_VALUE])
    fun listDirectories(): List<Directory> = directoryService.directories

    @DeleteMapping("/directory/{name}")
    fun removeDirectory(@PathVariable name: String) = directoryService.removeDirectory(name)

    @PostMapping("/directory/select", consumes = [MediaType.APPLICATION_JSON_VALUE])
    fun selectDirectory(@RequestBody directory: Directory) = gradleDependencyService.setProjectDirectory(directory.dir)

}

