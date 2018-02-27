package com.zlrx.visualizer.gradle.model

import org.gradle.tooling.BuildAction
import org.gradle.tooling.BuildController
import org.slf4j.LoggerFactory
import java.io.Serializable

class GenericModelAction : BuildAction<GenericModel>, Serializable {

    private val logger = LoggerFactory.getLogger(javaClass)

    override fun execute(controller: BuildController?): GenericModel {
        logger.debug("GenericModelAction.execute(controller)")
        return controller!!.getModel(GenericModel::class.java)
    }
}