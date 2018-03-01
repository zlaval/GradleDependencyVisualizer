package com.zlrx.gradle.model

import org.gradle.tooling.model.Model
import java.io.Serializable

interface DependencyCollectionModel : Model, Serializable {
    fun getDependencies(): Dependency
}

class DependencyCollectionModelImpl(private val dependencies: Dependency) : DependencyCollectionModel {
    override fun getDependencies(): Dependency {
        return dependencies
    }
}