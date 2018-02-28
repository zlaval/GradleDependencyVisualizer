package com.zlrx.gradle.model.builder

import com.zlrx.gradle.model.DependencyCollectionModel
import com.zlrx.gradle.model.DependencyCollectionModelImpl
import org.gradle.api.Project
import org.gradle.tooling.provider.model.ToolingModelBuilder

class DependencyToolingModelBuilder : ToolingModelBuilder {

    override fun canBuild(modelName: String?): Boolean {
        return modelName.equals(DependencyCollectionModel::class.java.name)
    }

    override fun buildAll(modelName: String?, project: Project?): Any {
        if (project != null) {
            val collector = DependencyCollector(project)
            val dependencies = collector.dependencies()
            return DependencyCollectionModelImpl(dependencies)
        }
        throw RuntimeException("project must not to be null")
    }

}