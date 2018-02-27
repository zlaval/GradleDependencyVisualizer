package com.zlrx.visualizer.gradle.model

import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilderRegistry
import javax.inject.Inject

class GenericGradleModelPlugin(@Inject val registry: ToolingModelBuilderRegistry) : Plugin<Project> {

    override fun apply(target: Project?) {
        registry.register(CustomToolingModelBuilder())
    }
}