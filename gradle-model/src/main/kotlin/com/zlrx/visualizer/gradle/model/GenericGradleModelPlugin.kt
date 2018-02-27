package com.zlrx.visualizer.gradle.model

import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilderRegistry
import org.slf4j.LoggerFactory
import javax.inject.Inject

class GenericGradleModelPlugin @Inject constructor(val registry: ToolingModelBuilderRegistry) : Plugin<Project> {

    private val logger = LoggerFactory.getLogger(javaClass)

    override fun apply(target: Project?) {
        logger.debug("GenericGradleModelPlugin.apply(target")
        registry.register(CustomToolingModelBuilder())
    }
}