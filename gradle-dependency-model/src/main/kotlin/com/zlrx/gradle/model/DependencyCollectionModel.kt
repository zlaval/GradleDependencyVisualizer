package com.zlrx.gradle.model

import org.gradle.tooling.model.Model
import java.io.Serializable

interface DependencyCollectionModel : Model, Serializable {
    fun getDependencies(): Map<String, Dependency>
}

class DependencyCollectionModelImpl(private val dependencies: Map<String, Dependency>) : DependencyCollectionModel {
    override fun getDependencies(): Map<String, Dependency> {
        return dependencies
    }
}