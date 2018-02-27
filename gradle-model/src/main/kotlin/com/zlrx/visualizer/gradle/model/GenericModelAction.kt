package com.zlrx.visualizer.gradle.model

import org.gradle.tooling.BuildAction
import org.gradle.tooling.BuildController
import java.io.Serializable

class GenericModelAction : BuildAction<GenericModel>, Serializable {

    override fun execute(controller: BuildController?): GenericModel {
        return controller!!.getModel(GenericModel::class.java)
    }
}