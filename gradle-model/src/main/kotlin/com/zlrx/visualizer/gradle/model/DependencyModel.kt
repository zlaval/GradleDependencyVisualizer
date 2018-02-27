package com.zlrx.visualizer.gradle.model

import java.io.Serializable

data class DependencyModel(val groupId: String,
                           val artifactId: String,
                           val version: String,
                           val type: String,
                           val children: List<DependencyModel> = ArrayList()) : Serializable