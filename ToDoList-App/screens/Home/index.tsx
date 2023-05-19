import { useState } from "react";
import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Keyboard,
} from "react-native";
import { v4 as uuid } from "uuid";
import Icon from "react-native-vector-icons/Ionicons";

import Task from "../../components/Task";
import { styles, colors } from "./styles";

interface Tasks {
  id: string;
  isComplete: boolean;
  task: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [newTask, setNewTask] = useState("");
  const [tasksDone, setTasksDone] = useState(0);

  function handleAddTask(): void {
    if (newTask !== "") {
      const task = {
        id: uuid(),
        isComplete: false,
        task: newTask,
      };
      setTasks((prevState) => [...prevState, task]);
      setNewTask("");
      Keyboard.dismiss();
    }
  }

  function handleRemoveTask(id: string): void {
    const tasksWithoutDeletedOnes = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOnes);
    setTasksDone(tasksWithoutDeletedOnes.length);
  }

  function handleTaskDone(id: string): void {
    let tasksDone = 0;
    const toggledTask = tasks.map((task) => {
      if (task.id === id) {
        task = {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      if (task.isComplete) tasksDone = tasksDone + 1;
      return task;
    });
    setTasks(toggledTask);
    setTasksDone(tasksDone);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/Logo.png")}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={"Adicione uma nova tarefa"}
          placeholderTextColor={"#808080"}
          onChangeText={setNewTask}
          value={newTask}
        />
        <TouchableOpacity style={styles.button} onPress={() => handleAddTask()}>
          <Icon name="add-circle-outline" size={25} color={colors.gray100} />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksStatus}>
        <View style={styles.statusBox}>
          <Text style={[styles.statusTitle, { color: colors.blue }]}>
            Criadas
          </Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.statusBox}>
          <Text style={[styles.statusTitle, { color: colors.purple }]}>
            Concluídas
          </Text>
          <View style={styles.countBox}>
            <Text style={styles.count}>{tasksDone}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            id={item.id as string}
            isComplete={item.isComplete}
            task={item.task}
            onRemove={() => handleRemoveTask(item.id)}
            onTaskDone={() => handleTaskDone(item.id)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.tasks}>
            <View style={styles.todoEmpty}>
              <Image
                style={styles.clipbordImage}
                source={require("../../assets/images/Clipboard.png")}
              />
              <Text style={styles.todoEmptyTitle}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.todoEmptySubTitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      ></FlatList>
    </View>
  );
}
