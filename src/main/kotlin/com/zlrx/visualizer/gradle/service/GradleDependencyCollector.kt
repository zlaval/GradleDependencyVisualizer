package com.zlrx.visualizer.gradle.service

import com.zlrx.visualizer.gradle.model.DependencyModel


class GradleDependencyCollector(private val path: String) {

    private val dependencies: MutableMap<String, DependencyModel> = HashMap()

    fun collectDependency(): DependencyModel {
        //TODO read file
        //parse
        //manage dep model

        return DependencyModel("", "", "")
    }

    private fun manageDependencyModel(groupId: String,
                                      artifactId: String,
                                      version: String,
                                      parent: DependencyModel) {

        val key = "$groupId:$artifactId:$version"
        val model = dependencies.get(key) ?: DependencyModel(groupId, artifactId, version)
        dependencies.putIfAbsent(key, model)
        parent.addChild(model)
    }


}