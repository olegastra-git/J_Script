import java.util.HashMap;
import java.util.Map;

public class RestaurantOrderManagement {

    public static void 2_main(String[] args) {

        // Создаем коллекции для хранения поваров и их специализаций
        Map<String, String> chefs = new HashMap<>();
        Map<String, Map<String, Integer>> orders = new HashMap<>();

        // Добавляем поваров и их специализации
        chefs.put("Виктор", "Пицца");
        chefs.put("Ольга", "Суши");
        chefs.put("Дмитрий", "Десерты");

        // Добавляем блюда и их поваров
        Map<String, String> dishes = new HashMap<>();
        dishes.put("Пицца \"Маргарита\"", "Виктор");
        dishes.put("Пицца \"Пепперони\"", "Виктор");
        dishes.put("Суши \"Филадельфия\"", "Ольга");
        dishes.put("Суши \"Калифорния\"", "Ольга");
        dishes.put("Тирамису", "Дмитрий");
        dishes.put("Чизкейк", "Дмитрий");

        // Добавляем заказы клиентов
        Map<String, Integer> client1 = new HashMap<>();
        client1.put("Пицца \"Пепперони\"", 1);
        client1.put("Тирамису", 1);
        orders.put("Алексей", client1);

        Map<String, Integer> client2 = new HashMap<>();
        client2.put("Суши \"Калифорния\"", 1);
        client2.put("Пицца \"Маргарита\"", 1);
        orders.put("Мария", client2);

        Map<String, Integer> client3 = new HashMap<>();
        client3.put("Чизкейк", 1);
        orders.put("Ирина", client3);

        // Выводим заказы
        for (String client : orders.keySet()) {
            System.out.println("Заказ клиента " + client + ":");
            Map<String, Integer> clientOrder = orders.get(client);
            for (String dish : clientOrder.keySet()) {
                System.out.println(dish + " - " + clientOrder.get(dish) + " порция");
                String chef = dishes.get(dish);
                System.out.println("Готовит повар: " + chef);
            }
            System.out.println();
        }
    }
}