---
tipo: competenza
area: analisi
corsi: [Analisi funzionale, Istituzioni topologia]
livello: [triennale]
aliases: ["separable space", "separabilità", "spazio metrico separabile", "sottoinsieme denso numerabile", "spazio topologico separabile"]
tags: [competenza, area/analisi]
---

# Spazio separabile

> Uno spazio metrico è separabile se ha un sottoinsieme denso al più numerabile: ogni elemento si approssima con una famiglia numerabile di "elementi semplici".

## Definizione / enunciato
$(M,d)$ è **separabile** se esiste $E\subseteq M$ al più numerabile con $\overline E=M$.
In uno spazio normato $X$ (Prop. 4.29): $X$ è separabile $\iff$ esiste $E\subseteq X$ al più numerabile con $\overline{\operatorname{span}E}=X$.

## Formule chiave
Esempi separabili: $(\mathbb R^n,d_2)$ (denso $\mathbb Q^n$), $(\mathbb C^n,d_2)$ (denso $(\mathbb Q+i\mathbb Q)^n$), $(C_{\mathbb F}[a,b],d_\infty)$ (Stone-Weierstrass), ogni sottoinsieme di uno spazio separabile, ogni spazio metrico compatto, $\ell^p$ per $p\in[1,\infty)$, $c_0$, $L^p(a,b)$ per $p\in[1,\infty)$.
Non separabili: $\ell^\infty$; $L^\infty(I)$ per $I$ intervallo di misura positiva.
$$X'\ \text{separabile}\ \Longrightarrow\ X\ \text{separabile}\qquad(\text{Hahn-Banach}).$$

## Intuizione
La separabilità è una "piccolezza" topologica: anche se lo spazio ha dimensione infinita, basta una quantità numerabile di vettori (per esempio i polinomi a coefficienti razionali) per approssimare tutto.

## Come si usa
- Uno spazio di Hilbert ha una base ortonormale (numerabile) se e solo se è separabile (Teor. 6.46).
- Combinata con Hahn-Banach dà risultati di non isomorfismo: $\ell^1$ è separabile ma $\ell^\infty$ no, quindi $(\ell^\infty)'$ non è isomorfo a $\ell^1$ (altrimenti $\ell^\infty$ sarebbe separabile).
- È un'ipotesi del teorema di Banach-Alaoglu.

## Nei corsi
- **Analisi funzionale** (triennale): Def. 2.25 ed Es. 2.26 (§2.4), Prop. 4.29 e Cor. 4.31 (§4.6), Cor. 5.39 ($L^p(a,b)$), conseguenze di Hahn-Banach in §8.5. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 18, 40, 43, 60, 131-132); `triennale/ANNO 3/analisi funzionale/02_spazimetrici_handout.pdf` (p. 15); `triennale/ANNO 3/analisi funzionale/07_duale_handout.pdf` (p. 11).

- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): definizione per spazi topologici qualsiasi. $X$ è separabile se ha un sottoinsieme denso e numerabile (Def. 2.33). Esempio: $\mathbb R$, con $\overline{\mathbb Q}=\mathbb R$ e $\mathring{\mathbb Q}=\emptyset$ (Es. 2.34). Pejsachowicz dimostra che uno spazio a base numerabile è separabile (Teor. 7.4) e che uno spazio metrico totalmente limitato è separabile (Prop. 10.4). Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (p. 21); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§7.1, §10.1).

## Prerequisiti
- [[Aperti e chiusi in uno spazio metrico]]: definizione di insieme denso
- [[Base di una topologia]]: base numerabile implica separabile (Istituzioni topologia)
- [[Insieme numerabile]]: il denso deve essere al più numerabile

## Porta a
- [[Base ortonormale di uno spazio di Hilbert]]: esiste se e solo se H è separabile
- [[Teorema di Banach-Alaoglu]]: ipotesi di separabilità

## Collegati
- [[Teorema di Stone-Weierstrass]]: dà la separabilità di C[a,b]
- [[Compattezza in spazi metrici]]: i compatti sono separabili
- [[Teorema di Hahn-Banach]]: X' separabile implica X separabile
- [[Sottospazi densi di Lp]]: separabilità di Lp(a,b) per p finito
