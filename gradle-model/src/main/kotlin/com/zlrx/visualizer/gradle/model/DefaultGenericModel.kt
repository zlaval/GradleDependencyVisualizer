package com.zlrx.visualizer.gradle.model

class DefaultGenericModel(
        val sub: List<Map<String, List<DependencyModel>>>,
        val root: Map<String, List<DependencyModel>>
) : GenericModel {

    override fun getSubprojectDependencies(): List<Map<String, List<DependencyModel>>> {
        return sub
    }

    override fun getRootDependencies(): Map<String, List<DependencyModel>> {
        return root
    }


}