package com.zlrx.visualizer.gradle.model

data class DependencyModel(val groupId: String,
                           val artifactId: String,
                           val version: String,
                           val type: String,
                           val children: List<DependencyModel> = ArrayList())