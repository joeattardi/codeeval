import java.util.Scanner;
import java.io.FileReader;

public class NumberMultiples {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(new FileReader(args[0]));
        while (scanner.hasNextLine()) {
            String[] input = scanner.nextLine().split(",");
            System.out.println(multiple(Integer.parseInt(input[0]), Integer.parseInt(input[1])));
        }
    }

    private static int multiple(int x, int n) {
        int multiple = n;
        for (; multiple < x; multiple += n);
        return multiple;
    }
}