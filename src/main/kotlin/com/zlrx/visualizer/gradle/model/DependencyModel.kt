package com.zlrx.visualizer.gradle.model

import java.util.*
import kotlin.collections.ArrayList


class DependencyModel(
        groupId: String,
        val artifactId: String,
        version: String) {

    val name: String = "$groupId:$artifactId:$version"

    private val children: MutableList<DependencyModel> = LinkedList()

    fun addChild(child: DependencyModel) = children.add(child)

    fun addChildren(list: List<DependencyModel>) = children.addAll(list)

    fun getChildren() = ArrayList(children)

}