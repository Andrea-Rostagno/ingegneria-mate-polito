---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: [hash table, hash map, funzione hash, hash function, collisione, liste di trabocco, chaining, indirizzamento aperto, open addressing, scansione lineare, scansione quadratica, hash doppio, fattore di caricamento, dizionario]
tags: [competenza, area/informatica]
---

# Tabella hash

> Dizionario realizzato come array associativo: una funzione hash trasforma la chiave in un indice, e le collisioni si gestiscono con liste di trabocco o indirizzamento aperto; costo medio $O(1)$.

## Definizione / enunciato
Un **dizionario** gestisce un insieme $S$ di elementi con chiave `e.chiave` in un universo $U$ e dati satellite: Ricerca($k$), Inserisci($e$), Cancella($k$), Appartiene($k$); è statico se c'è solo la ricerca. Una **funzione hash** va da $U$ a $[0,m-1]$; esempi: $\text{Hash}(k)=k\ \%\ m$ con $m$ primo, oppure funzioni crittografiche come md5, sha-1, sha-2 modulo un primo. **Collisione**: $k\ne k'$ ma $\text{Hash}(k)=\text{Hash}(k')$.
- **Liste di trabocco**: array di $m$ liste doppie; la lista $h$ contiene gli elementi con $\text{Hash}(e.\text{chiave})=h$, e le operazioni lavorano sulla lista $\text{Hash}(k)$.
- **Indirizzamento aperto**: array di $m>n$ posizioni; si prova la sequenza $\text{Hash}[0](k),\dots,\text{Hash}[m-1](k)$, che è una permutazione di $0,\dots,m-1$, fino alla prima posizione vuota.

## Formule chiave
Fattore di caricamento $\alpha=n/m$. Liste di trabocco con hash uniforme: lunghezza media $O(n/m)$, costo medio $O(1+\alpha)=O(1)$ se si mantiene $m$ circa doppio di $n$.
Scansioni (con $m$ primo): lineare $(\text{Hash}(k)+i)\%m$; quadratica $(\text{Hash}(k)+ai^2+bi+c)\%m$; hash doppio $(\text{Hash}(k)+i\cdot\text{Hash}'(k))\%m$.
Indirizzamento aperto, numero medio di accessi per inserire una chiave in una tabella con $n$ chiavi:
$$T(0,m)=1,\qquad T(n,m)=1+\frac nm\,T(n-1,m-1)<1+\frac nm\cdot\frac{m}{m-n}=\frac{m}{m-n},$$
quindi $T(n,m)\le\frac{m}{m-n}=(1-\alpha)^{-1}=O(1)$.

## Intuizione
Con un hash perfetto (senza collisioni in $S$) la ricerca costa $O(1)$ al caso pessimo, senza contraddire il limite $\Omega(\log n)$ dei confronti, perché non si confrontano chiavi ma si calcolano indirizzi. Nel caso pessimo, con tutte le chiavi in collisione, si torna a $O(n)$.

## Come si usa
Applicazione dei lucidi: nei sistemi peer-to-peer si spedisce $\text{Hash}(f)$ invece del file $f$ per capire se due peer hanno lo stesso file, e i blocchi $f_i$ si richiedono tramite sha-1($f_i$).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 4, dizionari. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo04.pdf` (p. 2-3, 7-16).
- **Blockchain e criptoeconomia** (magistrale): non c'è la tabella hash, ma la funzione hash in versione crittografica: $h:\Sigma^*\to\Sigma^n$, con collisioni inevitabili ma intrattabili da trovare (resistenza a preimmagine, seconda preimmagine e collisioni). Qui conta l'uniformità degli indici, là la sicurezza. Fonte: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 3-7).

## Prerequisiti
- [[Lista concatenata]]: liste di trabocco
- [[Array dinamico]]: si mantiene m circa il doppio di n

## Porta a
- Nessuno nel corso.

## Collegati
- [[Albero binario di ricerca]]: dizionario alternativo che mantiene l'ordine delle chiavi
- [[Indice hash]]: la stessa idea applicata alle pagine di un DBMS
- [[Dizionario in Python]]: dizionario del linguaggio, con accesso per chiave
- [[Funzione hash crittografica]]: hash con resistenza alle collisioni, per sicurezza e non per indicizzare (Blockchain e criptoeconomia)
