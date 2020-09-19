//Java Solution

class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode curr = queue.poll();
            
            if (curr.val == val) {
                return curr;
            } else if (curr.val >= val) {
                if (curr.left != null) {
                    queue.offer(curr.left);   
                }
            } else {
                if (curr.right != null) {
                    queue.offer(curr.right);
                }
            }
        }
        
        return null;
    }
}