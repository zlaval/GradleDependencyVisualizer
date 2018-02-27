package com.zlrx.visualizer.gradle.model

import org.gradle.tooling.model.Model

interface GenericModel : Model {

    fun getRootDependencies(): Map<String, List<DependencyModel>>
    fun getSubprojectDependencies(): List<Map<String, List<DependencyModel>>>

}