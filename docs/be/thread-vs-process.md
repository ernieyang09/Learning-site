# Thread vs Process


### What Is A Program?

Program is an executable file containing the set of instructions written to perform a specific job on your computer. Programs are not stored on the primary memory in your computer. They are stored on a disk or a secondary memory on your computer. A program is sometimes referred as passive entity as it resides on a secondary memory. (blueprint)


### What Is A Process?

Process is an executing instance of a program. A process is sometimes referred as active entity as it resides on the primary memory and leaves the memory if the system is rebooted. Several processes may related to same program. For example, you can run multiple instances of a notepad program. Each instance is referred as a process.

### What Is A Thread?

Thread is the smallest executable unit of a process. A process can have multiple threads. Each thread will have their own task and own path of execution in a process. All threads of the same process share memory of that process. As threads of the same process share the same memory, communication between the threads is fast.


