import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

interface Props {
  id: string;
  isComplete: boolean;
  task: string;
  onRemove: () => void;
  onTaskDone: () => void;
}

export default function Task({
  id,
  isComplete,
  task,
  onRemove,
  onTaskDone,
}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onTaskDone()}
        style={isComplete ? styles.checkedBox : styles.uncheckedBox}
      >
        {isComplete && <Icon name="checkmark-outline" color={"#FFF"} />}
      </TouchableOpacity>

      <Text style={isComplete ? styles.taskDone : styles.task}>{task}</Text>

      <TouchableOpacity style={styles.deleteTask} onPress={() => onRemove()}>
        <Icon style={styles.trash} name="trash-outline" size={20} />
      </TouchableOpacity>
    </View>
  );
}
