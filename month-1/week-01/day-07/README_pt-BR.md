[![en Challenge](https://img.shields.io/badge/-en-blue)](README.md)
[![pt-BR Challenge](https://img.shields.io/badge/-pt--BR-brightgreen)](README_pt-BR.md)

## Dia 07 - Mesclar Arrays Ordenados

Dados dois arrays de números inteiros ordenados nums1 e nums2, mescle nums2 em nums1 como um único array ordenado.

### Exemplos

```text
Entradas:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Saída: [1,2,2,3,5,6]
```

### Restrições

- `-10^9 <= nums1[i], nums2[i] <= 10^9`
- `nums1.length == m + n`
- `nums2.length == n`

---

### Notas
- O número de elementos inicializados em nums1 e nums2 são m e n respectivamente.
- Você pode assumir que nums1 tem o espaço suficiente (tamano que é **igual** a m + n) para armazenar os elementos adicionais de nums2.