---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Informatica, Fisica 1, Metodi numerici]
livello: [triennale]
aliases: ["absolute error", "relative error", "errore assoluto", "errore relativo"]
tags: [competenza, area/numerica]
---

# Errore assoluto e relativo

> Le due misure della distanza tra una quantità e una sua approssimazione; quella relativa tiene conto dell'ordine di grandezza.

## Definizione / enunciato
Sia $\tilde x$ un'approssimazione di $x$. Si definiscono
$$e_a=|x-\tilde x|\quad\text{(errore assoluto)},\qquad e_r=\frac{|x-\tilde x|}{|x|},\ x\ne0\quad\text{(errore relativo)}.$$
Se $x$ è una funzione, un vettore o una matrice, il valore assoluto si sostituisce con una norma opportuna $\|\cdot\|$.

## Formule chiave
$$e_a=|x-\tilde x|,\qquad e_r=\frac{|x-\tilde x|}{|x|}\qquad\Big(\text{vettori: } \frac{\|x-\tilde x\|}{\|x\|}\Big)$$

## Intuizione
Un errore assoluto di 1 è grave su una grandezza dell'ordine di 1000 e trascurabile su una di un milione: l'errore relativo misura quante cifre significative sono corrette, per questo è l'indicatore più realistico.

## Come si usa
Esempio delle slide ($N=10$): $x=10^3$, $\tilde x=999$ dà $e_a=1$, $e_r=10^{-3}$; $x=10^6$, $\tilde x=999999$ dà ancora $e_a=1$ ma $e_r=10^{-6}$. Negli esperimenti Matlab del corso l'errore si calcola come `abs(y1-y2)/abs(y2)` oppure `norm(u-x,inf)/norm(u,inf)` per i vettori.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn1_aritmetica_print.pdf` (slide 25-26); usato in tutto il corso (es. `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 30-31)).
- **Informatica** (triennale): unità P3: `math.isclose(a, b, rel_tol, abs_tol)` confronta due float con una tolleranza relativa (`rel_tol`) e una assoluta (`abs_tol`, utile vicino a 0). Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 52-53).
- **Fisica 1** (triennale): errore relativo $\delta x/x_0$ ed errore percentuale $(\delta x/x_0)\cdot100$ di una misura sperimentale; nel laboratorio del corso un errore relativo $\ge10\%$ indica una misura rozza. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Teoria_degli_Errori/LezioneFisica1_Dimensione_ErrorediMisura.pdf` (p. 24).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): oltre agli errori, le definizioni di decimali corretti ($\frac12N^{-(k+1)}<|a-\tilde a|\le\frac12N^{-k}$) e di cifre significative (stessa condizione su $|p-\tilde p|$). Esempio: $a=0.589231$, $\tilde a=0.58941326$ ha 3 decimali corretti e 3 cifre significative; moltiplicando entrambi per $10^{-3}$ si hanno 6 decimali corretti ma sempre 3 cifre significative. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_01_aritmetica_print.pdf` (p. 18-20). Gli errori misurano poi l'ordine di convergenza dei metodi iterativi e le tolleranze dei criteri di arresto.

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Ordine di convergenza di un metodo iterativo]]: si misura con l'errore $|\alpha-x_n|$ (Metodi numerici)
- [[Criteri di arresto dei metodi iterativi]]: tolleranze assolute e relative (Metodi numerici)
- [[Precisione di macchina]]: stima dell'errore relativo di arrotondamento
- [[Condizionamento di un problema numerico]]: rapporto tra errori relativi di dati e risultati

## Collegati
- [[Norme vettoriali]]: per i vettori il modulo diventa una norma
- [[Confronto tra numeri floating point]]: isclose combina una tolleranza relativa e una assoluta
- [[Errori di misura]]: stessa definizione di errore relativo, qui per misure fisiche
