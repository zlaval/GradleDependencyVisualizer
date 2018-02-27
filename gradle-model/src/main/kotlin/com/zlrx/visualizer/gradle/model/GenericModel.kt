package com.zlrx.visualizer.gradle.model

import org.gradle.tooling.model.Model
import java.io.Serializable

interface GenericModel : Model, Serializable {

    fun getRootDependencies(): Map<String, List<DependencyModel>>
    fun getSubprojectDependencies(): List<Map<String, List<DependencyModel>>>

}