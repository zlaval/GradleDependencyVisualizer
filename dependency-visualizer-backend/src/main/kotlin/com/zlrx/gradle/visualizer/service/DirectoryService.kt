package com.zlrx.gradle.visualizer.service

import com.zlrx.gradle.visualizer.model.Directory
import org.springframework.stereotype.Service

@Service
class DirectoryService {

    val directories = ArrayList<Directory>()

    fun addDirectory(directory: Directory): Directory {
        directories.add(directory)
        return directory
    }

    fun removeDirectory(name: String) = directories.removeIf { it.name == name }

}