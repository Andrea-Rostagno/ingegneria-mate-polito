---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni topologia]
livello: [triennale]
aliases: ["connected space", "spazio topologico connesso", "spazio sconnesso", "sconnessione", "componente connessa di uno spazio topologico", "spazio totalmente sconnesso", "localmente connesso", "connessi di R", "proprietà di Darboux"]
tags: [competenza, area/algebra-geometria]
---

# Spazio connesso

> Uno spazio è connesso se non si può spezzare in due aperti disgiunti non vuoti: in $\mathbb R$ i connessi sono gli intervalli, e la connessione passa alle immagini continue, dando il teorema degli zeri in qualunque spazio.

## Definizione / enunciato
$(X,\tau)$ è **connesso** se gli unici insiemi aperti e chiusi sono $\emptyset$ e $X$, cioè $\tau\cap\tau^*=\{\emptyset,X\}$ (Def. 6.1). Equivalentemente non esistono aperti non vuoti $A_1,A_2$ con $A_1\cap A_2=\emptyset$ e $A_1\cup A_2=X$ (Prop. 6.2). $E\subseteq X$ è connesso se lo è $(E,\tau_E)$.
- Una **componente connessa** è un connesso non contenuto propriamente in alcun connesso (Def. 6.4); $X$ è **totalmente sconnesso** se le componenti sono punti (Def. 6.6).
- **Prop. 6.5.** Se $E$ è connesso e $E\subseteq H\subseteq\overline E$, $H$ è connesso; in particolare $\overline E$ è connesso e ogni componente connessa è chiusa.
- **Teor. 6.8.** $E\subseteq(\mathbb R,\mathcal E_1)$ è connesso se e solo se è un intervallo oppure un punto.
- **Teor. 6.9.** L'immagine continua di un connesso è connessa; la connessione e il numero di componenti sono invarianti per omeomorfismi (Cor. 6.10).

## Formule chiave
**Teor. 6.11 (degli zeri).** $f:X\to\mathbb R$ continua, $E\subseteq X$ connesso, $f(p_1)<0<f(p_2)$ con $p_i\in E$ $\Rightarrow$ esiste $p_0\in E$ con $f(p_0)=0$. Infatti altrimenti
$$E=\{p\in E\mid f(p)<0\}\cup\{p\in E\mid f(p)>0\}$$
sarebbe una sconnessione.
**Cor. 6.12 (valori intermedi).** Se $K$ è connesso e compatto, $f$ assume ogni valore tra $\min_Kf$ e $\max_Kf$.
**Pejsachowicz, Teor. 9.2.** $X$ è connesso $\iff$ ogni $f:X\to\mathbb R$ continua ha la proprietà dei valori intermedi $\iff$ ogni $\varphi:X\to\{0,1\}$ continua (con la discreta) è costante.

## Intuizione
Connesso è "tutto d'un pezzo": la definizione non parla di cammini ma solo di aperti, ed è per questo più debole della connessione per archi. Le funzioni continue non possono strappare un connesso, quindi non possono saltare un valore.

## Come si usa
- Per dimostrare che un insieme non è connesso si esibisce una sconnessione: se $E\subseteq\mathbb R$ non è un intervallo, $(-\infty,y)$ e $(y,+\infty)$ lo sconnettono.
- Esempi (Es. 6.3, 6.7): la banale è connessa, la discreta con almeno due punti no; la cofinita su un insieme infinito è connessa; $\{\frac1n\}\cup\{0\}$ è totalmente sconnesso e la componente $\{0\}$ non è aperta; $\mathbb R$ con la base $\{[a,b)\}$ è totalmente sconnesso.
- $GL_n(\mathbb R)$ è sconnesso: $\{\det>0\}$ e $\{\det<0\}$ sono aperti disgiunti che lo ricoprono (Es. 6.25).
- Pejsachowicz aggiunge la locale connessione (Teor. 9.13) e che ogni aperto di $\mathbb R$ è unione disgiunta al più numerabile di intervalli aperti (Teor. 9.14).

## Nei corsi
- **Istituzioni topologia** (triennale; materiale della cartella ANNO 3/istituzioni): punti 11 (chiusura di un connesso) e 12 (connessione e valori intermedi, [P] 9.2) della lista delle dimostrazioni per l'orale. Fonti: `triennale/ANNO 3/istituzioni/topologia/Appunti di Topologia (Ferrarotti).pdf` (§6.1-6.2, Def. 6.1-6.6, Prop. 6.2-6.5, Teor. 6.8-6.11, Cor. 6.12, pp. 44-46); `triennale/ANNO 3/istituzioni/topologia/Pejsachwicz (1).pdf` (§9.1-9.2, Teor. 9.1-9.6, 9.11-9.14).

## Prerequisiti
- [[Spazio topologico]]: aperti e chiusi
- [[Chiusura e interno in uno spazio topologico]]: la chiusura di un connesso è connessa
- [[Funzione continua tra spazi topologici]]: immagini continue

## Porta a
- [[Prodotto di spazi connessi]]: connessione del prodotto e di R^n
- [[Connessione per archi]]: nozione più forte
- [[Teorema degli zeri]]: versione generale su un connesso
- [[Teorema dei valori intermedi]]: versione generale su un connesso compatto

## Collegati
- [[Componenti connesse di un grafo]]: analogo combinatorio
- [[Insieme semplicemente connesso]]: rafforzamento usato in analisi 2
- [[Topologia quoziente]]: il quoziente di un connesso è connesso
