package com.zlrx.gradle.model.plugin

import com.zlrx.gradle.model.builder.DependencyToolingModelBuilder
import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilderRegistry
import javax.inject.Inject

class DependencyModelPlugin @Inject constructor(val registry: ToolingModelBuilderRegistry) : Plugin<Project> {
    override fun apply(target: Project?) {
        registry.register(DependencyToolingModelBuilder())
    }
}