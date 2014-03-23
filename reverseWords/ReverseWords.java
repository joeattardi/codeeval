import java.util.Scanner;
import java.io.FileReader;

public class ReverseWords {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(new FileReader(args[0]));
        while (scanner.hasNextLine()) {
            System.out.println(reverse(scanner.nextLine()));
        }
    }

    private static String reverse(String line) {
        String[] words = line.split(" ");
        StringBuilder reversed = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]).append(" ");
        }

        return reversed.toString().trim();
    }
}