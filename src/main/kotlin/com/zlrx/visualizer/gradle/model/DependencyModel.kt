package com.zlrx.visualizer.gradle.model

import java.util.*


class DependencyModel(
        groupId: String,
        artifactId: String,
        version: String) {

    val name: String = "$groupId:$artifactId:$version"

    private val children: MutableList<DependencyModel>

    init {
        children = LinkedList()
    }

    fun addChild(child: DependencyModel) = children.add(child)


}