package com.zlrx.visualizer.gradle

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
open class GradleDependencyApplication

fun main(args: Array<String>) {
    SpringApplication.run(GradleDependencyApplication::class.java, *args)
}
