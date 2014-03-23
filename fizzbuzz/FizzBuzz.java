import java.util.Arrays;
import java.io.IOException;
import java.io.File;
import java.util.Scanner;

public class FizzBuzz {
    public static void main(String[] args) {
        try (Scanner inputScanner = new Scanner(new File(args[0]))) {;
            while (inputScanner.hasNextLine()) {
                Scanner lineScanner = new Scanner(inputScanner.nextLine());
                fizzBuzz(lineScanner.nextInt(), lineScanner.nextInt(), lineScanner.nextInt());
            }
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }
    }

    public static void fizzBuzz(int a, int b, int n) {
        StringBuilder builder = new StringBuilder();
        for (int i = 1; i <= n; i++) {
            StringBuilder num = new StringBuilder();

            if (i % a == 0) {
                num.append("F");
            }

            if (i % b == 0) {
                num.append("B");
            }

            builder.append(num.length() == 0 ? i : num.toString()).append(" ");

        }

        System.out.println(builder.toString().trim());
    }
}