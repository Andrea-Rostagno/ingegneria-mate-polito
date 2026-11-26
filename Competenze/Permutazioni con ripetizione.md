---
tipo: competenza
area: algebra-geometria
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["permutations with repetition", "anagrammi", "counting anagrams", "distribuire regali", "distributing presents", "teorema multinomiale", "multinomial theorem", "oggetti distinti in scatole numerate"]
tags: [competenza, area/algebra-geometria]
---

# Permutazioni con ripetizione

> Contano gli anagrammi di una parola con lettere ripetute, o i modi di distribuire $n$ oggetti distinti fra $k$ persone con numeri assegnati. In entrambi i casi la risposta è il coefficiente multinomiale.

## Definizione / enunciato
**Problema 2.2.1 (regali).** $n$ regali distinti vanno dati a $k$ bambini, e il bambino $j$ ne riceve esattamente $n_j$, con $n_1+\dots+n_k=n$. Si mettono i regali in fila, il primo blocco di $n_1$ va al bambino 1 e così via. Ognuna delle $n!$ file dà una distribuzione, ma permutando i regali dentro ciascun blocco la distribuzione non cambia. Le distribuzioni sono
$$\frac{n!}{n_1!\,n_2!\cdots n_k!}.$$
**Teorema 2.3.1 (anagrammi).** Una parola con $k$ lettere distinte di molteplicità $n_1,\dots,n_k$ ha $\dfrac{(n_1+\dots+n_k)!}{n_1!\cdots n_k!}$ anagrammi. Se tutte le $n_j=1$ si ritrovano le $n!$ permutazioni.

## Formule chiave
$$\binom{n}{n_1,\dots,n_k}=\frac{n!}{n_1!\cdots n_k!}=\binom{n}{n_1}\binom{n-n_1}{n_2}\cdots\binom{n_k}{n_k}.$$
**Teorema multinomiale** (lezione 4):
$$(x_1+\dots+x_k)^n=\sum_{n_1+\dots+n_k=n}\binom{n}{n_1,\dots,n_k}x_1^{n_1}\cdots x_k^{n_k}.$$

## Intuizione
Si contano prima le disposizioni come se gli oggetti uguali fossero distinguibili (Tilli li "colora"), poi si divide per i modi di scambiarli fra loro, che non producono configurazioni nuove. In alternativa, con la regola del prodotto, si scelgono prima i posti della prima lettera, poi quelli della seconda fra i posti rimasti, e così via.

## Come si usa
Esempi della lezione 4:
- **"matematica"**: 10 lettere, con M ripetuta 2 volte, A 3 volte, T 2 volte, E, I, C una volta. Gli anagrammi sono $\frac{10!}{2!\,3!\,2!}$;
- **premiazione:** 7 libri distinti ai primi 4 classificati (3, 2, 1 e 1 libro): $\frac{7!}{3!\,2!\,1!\,1!}=7\cdot6\cdot5\cdot2$;
- **"mamma"** (Tilli Es. 2.3.2): $\binom52=10$ anagrammi, perché basta scegliere i posti delle due "a".

## Nei corsi
- **Matematica discreta** (triennale): lezione 4 ("Distribuzione di giocattoli", "Anagrammi", teorema multinomiale). Fonti: `triennale/ANNO 1/Matematica discreta/teoria/04 - Contare con insiemi finiti.pdf` (lezione 4, pp. 16-20); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§2.2-2.3, pp. 24-29).

## Prerequisiti
- [[Regola del prodotto]]: si permutano i blocchi uno alla volta
- [[Calcolo combinatorio]]: $n!$ permutazioni e coefficienti binomiali

## Porta a
- [[Partizioni di un insieme finito]]: con scatole non numerate si divide anche per i blocchi uguali

## Collegati
- [[Teorema binomiale]]: il caso $k=2$ del teorema multinomiale
- [[Combinazioni con ripetizione]]: il cestino della frutta si conta come anagramma
