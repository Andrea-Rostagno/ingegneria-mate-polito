---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Lagrange-Dirichlet theorem", "teorema di Dirichlet-Lagrange", "criterio di stabilità di Lagrange-Dirichlet", "Theorem 8.5"]
tags: [competenza, area/fisica]
---

# Teorema di Lagrange-Dirichlet

> In un sistema olonomo conservativo con vincoli fissi, un equilibrio in cui il potenziale ha un massimo locale isolato è stabile secondo Lyapunov.

## Definizione / enunciato
**Thm 8.5:** sia dato un sistema olonomo conservativo con vincoli indipendenti dal tempo, con $U$ continuo in $q$, e sia $q_0$ un equilibrio. Se $U(q_0)$ è un **massimo locale isolato** di $U$, allora $q_0$ è stabile secondo Lyapunov.
*(Il testo lo chiama solo "Theorem 8.5"; il nome "Lagrange-Dirichlet" è quello tradizionale.)*

## Formule chiave
- Condizione sufficiente (con $U\in C^2$): $\nabla U(q_0)=0$ e hessiana $B=\left(\frac{\partial^2U}{\partial q_i\partial q_j}\big|_{q_0}\right)$ definita negativa (8.37).
- **Prop. 8.2:** $B^0$ ha tanti autovalori positivi, nulli e negativi rispetto ad $A^0$ quanti ne ha in senso ordinario; quindi la stabilità di Lyapunov dipende solo da $U$, non da $T$.

## Intuizione
Lungo il moto $E=T-U$ è costante (Thm 7.10). Vicino a un massimo isolato di $U$, cioè a un minimo di $V=-U$, l'energia cinetica non può crescere senza che il sistema "risalga" il potenziale: il sistema resta intrappolato in un intorno di $q_0$. È lo stesso criterio della stabilità statica (Prop. 6.2), ora con significato dinamico.

## Come si usa
1. Si trovano gli equilibri con $\nabla U=0$; 2. si calcola l'hessiana di $U$; 3. se è definita negativa l'equilibrio è stabile, e si possono studiare le piccole oscillazioni. **Lect7, Ex4:** $\det B^0=-M^2g^2<0$, cioè un autovalore positivo e uno negativo: l'equilibrio $(0,0)$ è instabile, perché il disco, spostato, inclina l'asta e scappa. **Ex5:** solo $(0,0)$ è stabile.

## Nei corsi
- **Meccanica** (triennale): con la convenzione $U$ = potenziale serve un **massimo** di $U$ (minimo dell'energia potenziale). Fonti: `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 86, 89-91, Thm 8.5, Prop. 8.2; numerazione stampata). Il manoscritto 2017 (`triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf`, p. 137) enuncia la stessa condizione per la stabilità in senso statico.

## Prerequisiti
- [[Stabilità secondo Lyapunov]]: definizione da verificare
- [[Stabilità dell'equilibrio in senso statico]]: stessa condizione sul potenziale
- [[Conservazione dell'energia meccanica]]: E = T − U costante intrappola il moto

## Porta a
- [[Piccole oscillazioni attorno all'equilibrio]]: si linearizza attorno all'equilibrio stabile

## Collegati
- [[Classificazione dei punti critici]]: hessiana definita negativa e massimo
