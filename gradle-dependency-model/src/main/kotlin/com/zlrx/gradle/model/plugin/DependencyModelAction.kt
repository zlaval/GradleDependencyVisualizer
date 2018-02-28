package com.zlrx.gradle.model.plugin

import com.zlrx.gradle.model.DependencyCollectionModel
import org.gradle.tooling.BuildAction
import org.gradle.tooling.BuildController
import java.io.Serializable

class DependencyModelAction : BuildAction<DependencyCollectionModel>, Serializable {
    override fun execute(controller: BuildController?): DependencyCollectionModel {
        return controller!!.getModel(DependencyCollectionModel::class.java)
    }
}