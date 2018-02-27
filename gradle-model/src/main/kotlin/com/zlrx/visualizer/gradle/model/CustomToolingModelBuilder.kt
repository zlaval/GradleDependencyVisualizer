package com.zlrx.visualizer.gradle.model

import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilder

class CustomToolingModelBuilder : ToolingModelBuilder {

    override fun canBuild(modelName: String?): Boolean {
        return modelName.equals(GenericModel::class.java.name)
    }

    override fun buildAll(modelName: String?, project: Project?): Any {
        if (project != null) {
            return DefaultGenericModel(project)
        }
        throw RuntimeException("project must not to be null")
    }


}