package com.zlrx.visualizer.gradle.model

import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilder
import org.slf4j.LoggerFactory

class CustomToolingModelBuilder : ToolingModelBuilder {

    private val logger = LoggerFactory.getLogger(javaClass)

    override fun canBuild(modelName: String?): Boolean {
        logger.debug("CustomToolingModelBuilder.canBuild(modelName=$modelName)")
        return modelName.equals(GenericModel::class.java.name)
    }

    override fun buildAll(modelName: String?, project: Project?): Any {
        logger.debug("CustomToolingModelBuilder.buildAll(modelName=$modelName,project)")
        if (project != null) {
            return DefaultGenericModel(project)
        }
        logger.error("project must not to be null")
        throw RuntimeException("project must not to be null")
    }


}