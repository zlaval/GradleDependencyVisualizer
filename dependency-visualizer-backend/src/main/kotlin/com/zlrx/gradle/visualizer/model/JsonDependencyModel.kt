package com.zlrx.gradle.visualizer.model

import java.util.*
import kotlin.collections.LinkedHashMap


data class JsonDependencyModel(val name: String, val children: List<JsonDependencyModel> = ArrayList(), val attributes: Map<String, String> = LinkedHashMap())




