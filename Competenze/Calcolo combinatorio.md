---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Istituzioni algebra, Matematica discreta]
livello: [triennale]
aliases: ["combinatorics", "disposizioni con ripetizione", "disposizioni semplici", "permutazioni", "combinazioni semplici", "coefficiente binomiale", "coefficiente multinomiale"]
tags: [competenza, area/probabilita]
---

# Calcolo combinatorio

> Le formule per contare sequenze e sottoinsiemi: servono a calcolare le cardinalità negli spazi uniformi e i coefficienti delle leggi discrete.

## Definizione / enunciato
Dato un insieme di $n$ elementi:
- **disposizioni con ripetizione**: sequenze ordinate di $k$ elementi;
- **disposizioni semplici**: sequenze ordinate di $k$ elementi diversi ($n\ge k$);
- **permutazioni**: ordinamenti degli $n$ elementi;
- **combinazioni semplici**: sottoinsiemi di $k$ elementi ($n\ge k$);
- **coefficiente multinomiale**: modi di partizionare l'insieme in $r$ sottoinsiemi di $k_1,\dots,k_r$ elementi, $k_1+\dots+k_r=n$.

## Formule chiave
$$D^R_{n,k}=n^k,\qquad D_{n,k}=\frac{n!}{(n-k)!}=n(n-1)\cdots(n-k+1),\qquad P_n=D_{n,n}=n!,$$
$$C_{n,k}=\binom nk=\frac{n!}{k!\,(n-k)!},\qquad \binom{n}{k_1,\dots,k_r}=\frac{n!}{k_1!\cdots k_r!}.$$

## Intuizione
Si distingue se l'ordine conta (disposizioni) o no (combinazioni), e se si può ripetere: ogni combinazione di $k$ elementi corrisponde a $k!$ disposizioni.

## Come si usa
Esempi svolti a lezione (Foglio 1): urna con 5 rosse, 6 blu, 8 verdi, si estraggono in blocco 3 palline: $\operatorname{card}\Omega=\binom{19}3$ e $\mathbb P(\text{colori diversi})=\frac{\binom51\binom61\binom81}{\binom{19}3}=\frac{80}{323}$. Codice di 4 cifre: $\operatorname{card}\Omega=10^4$; cifre tutte distinte $\frac{D_{10,4}}{10^4}=0.504$; cifre strettamente crescenti $\frac{\binom{10}4}{10^4}=0.021$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): formule nel formulario d'esame; usate nella lezione 4 (appunto manoscritto) per gli spazi uniformi. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/formularioprobabilita (1).pdf` (sezione "Calcolo combinatorio"); `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione04(23-03-23) (6).pdf` (lezione 4, pp. 9-13).
- **Istituzioni algebra** (triennale): il binomio di Newton $(a+b)^n=\sum\binom ni a^ib^{n-i}$ è dimostrato per induzione con $\binom n{i-1}+\binom ni=\binom{n+1}i$. Ne segue $|\mathcal P(I_n)|=2^n$. Inoltre $|S_n|=n!$, e $p\mid\binom pi$ per $0<i<p$ dà $(a+b)^p\equiv a^p+b^p\pmod p$. Fonti: `triennale/ANNO 2/istituzioni/Alg-03-10-22.pdf` (lezione 3, pp. 4-5); `triennale/ANNO 2/istituzioni/Alg-05-10-22.pdf` (lezioni 4-5, p. 7); `triennale/ANNO 2/istituzioni/Alg-30-11-22.pdf` (lezioni 25-26, p. 22).
- **Matematica discreta** (triennale): tutto è derivato da regola della somma e del prodotto. Una **permutazione** di $n$ oggetti è una biiezione dell'insieme in sé, e sono $n!$. Le **disposizioni senza ripetizione** di $k$ oggetti scelti fra $n$ sono $n(n-1)\cdots(n-k+1)$ e coincidono col numero di funzioni iniettive $X_k\to Y_n$ (podio di 30 partecipanti: $30\cdot29\cdot28$). Le **combinazioni** si ottengono dividendo per le $k!$ permutazioni del gruppo scelto (i gruppi che salgono sul podio). Il quiz della lezione 6 riassume i quattro casi: scelte ordinate senza ripetizione (disposizioni, $10!/4!$), ordinate con ripetizione (funzioni, $10^6$), non ordinate senza ripetizione (sottoinsiemi, $\binom{10}6$), non ordinate con ripetizione ($\binom{15}9$). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 4-10); `triennale/ANNO 1/Matematica discreta/teoria/06 - Successioni ricorsive non lineari.pdf` (p. 9); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§1.3-1.4).

## Prerequisiti
- Nessuno.
- [[Regola del prodotto]]: in Matematica discreta tutte le formule si ricavano scegliendo un elemento per volta

## Porta a
- [[Distribuzione binomiale]]: coefficiente binomiale
- [[Distribuzione ipergeometrica]]: conteggio delle estrazioni
- [[Distribuzione di Pascal]]: coefficiente binomiale
- [[Teorema binomiale]]: i coefficienti binomiali nello sviluppo di $(x+y)^n$ (Matematica discreta)
- [[Combinazioni con ripetizione]]: scelte non ordinate con ripetizione (Matematica discreta)
- [[Permutazioni con ripetizione]]: anagrammi e coefficiente multinomiale (Matematica discreta)
- [[Dismutazioni]]: permutazioni senza punti fissi (Matematica discreta)

## Collegati
- [[Principio di induzione]]: dimostrazione della formula del binomio
- [[Gruppo simmetrico]]: le $n!$ permutazioni formano il gruppo $S_n$
- [[Piccolo teorema di Fermat]]: $p$ divide i binomiali $\binom pi$ con $0<i<p$
- [[Spazio di probabilità]]: conteggi nello spazio uniforme
- [[Lemma delle strette di mano]]: le $\binom n2$ strette di mano sono gli archi del grafo completo $K_n$ (Matematica discreta)
