package com.zlrx.gradle.model

import java.io.Serializable

interface Dependency : Serializable {
    fun getGroupId(): String
    fun getArtifactId(): String
    fun getVersion(): String
    fun getType(): String
    fun getScope(): String
    fun getChildren(): List<Dependency>
}

class DependencyImpl(private val groupId: String,
                     private val artifactId: String,
                     private val version: String,
                     private val type: String,
                     private val scope: String,
                     private val children: List<Dependency> = ArrayList()) : Dependency {

    override fun getScope(): String {
        return scope
    }

    override fun getGroupId(): String {
        return groupId
    }

    override fun getArtifactId(): String {
        return artifactId
    }

    override fun getVersion(): String {
        return version
    }

    override fun getType(): String {
        return type
    }

    override fun getChildren(): List<Dependency> {
        return children
    }
}